// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const loginSection = document.getElementById('login-section');
  const dashboardSection = document.getElementById('dashboard-section');
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  const logoutButton = document.getElementById('logout-button');
  const mobileLogout = document.getElementById('mobile-logout');
  const newTab = document.getElementById('new-tab');
  const seenTab = document.getElementById('seen-tab');
  const newMessages = document.getElementById('new-messages');
  const seenMessages = document.getElementById('seen-messages');
  const newMessagesList = document.getElementById('new-messages-list');
  const seenMessagesList = document.getElementById('seen-messages-list');
  const newCount = document.getElementById('new-count');
  const seenCount = document.getElementById('seen-count');
  const noNewMessages = document.getElementById('no-new-messages');
  const noSeenMessages = document.getElementById('no-seen-messages');
  
  // Admin credentials (in real app, this would be server-side)
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'codecraft';
  
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (isLoggedIn) {
    showDashboard();
  }
  
  // Login form submit
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true');
      showDashboard();
      loginError.classList.add('hidden');
    } else {
      loginError.classList.remove('hidden');
    }
  });
  
  // Logout
  logoutButton.addEventListener('click', logout);
  mobileLogout.addEventListener('click', logout);
  
  // Tab switching
  newTab.addEventListener('click', function() {
    newTab.classList.add('active');
    seenTab.classList.remove('active');
    newMessages.classList.remove('hidden');
    seenMessages.classList.add('hidden');
  });
  
  seenTab.addEventListener('click', function() {
    seenTab.classList.add('active');
    newTab.classList.remove('active');
    seenMessages.classList.remove('hidden');
    newMessages.classList.add('hidden');
  });
  
  // Initially load messages
  loadMessages();
  
  // Functions
  function showDashboard() {
    loginSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    logoutButton.classList.remove('hidden');
    mobileLogout.classList.remove('hidden');
    loadMessages();
  }
  
  function logout(e) {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    dashboardSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
    logoutButton.classList.add('hidden');
    mobileLogout.classList.add('hidden');
  }
  
  function loadMessages() {
    // Load messages from localStorage
    const messages = getMessages();
    const newMessages = messages.filter(msg => !msg.seen);
    const seenMessages = messages.filter(msg => msg.seen);
    
    // Update counters
    newCount.textContent = newMessages.length;
    seenCount.textContent = seenMessages.length;
    
    // Clear lists
    clearMessagesList(newMessagesList);
    clearMessagesList(seenMessagesList);
    
    // Show or hide empty message
    if (newMessages.length === 0) {
      noNewMessages.classList.remove('hidden');
    } else {
      noNewMessages.classList.add('hidden');
      renderMessages(newMessages, newMessagesList, true);
    }
    
    if (seenMessages.length === 0) {
      noSeenMessages.classList.remove('hidden');
    } else {
      noSeenMessages.classList.add('hidden');
      renderMessages(seenMessages, seenMessagesList, false);
    }
  }
  
  function clearMessagesList(listElement) {
    // Keep the no-messages element and remove the rest
    while (listElement.children.length > 1) {
      listElement.removeChild(listElement.children[0]);
    }
  }
  
  function renderMessages(messages, container, showMarkSeen) {
    const template = document.getElementById('message-template');
    
    messages.forEach(message => {
      const messageCard = document.importNode(template.content, true).querySelector('.message-card');
      
      // Populate the card with message data
      messageCard.querySelector('.message-name').textContent = message.name;
      messageCard.querySelector('.message-date').textContent = formatDate(message.date);
      messageCard.querySelector('.message-email').textContent = message.email;
      
      const phoneElement = messageCard.querySelector('.message-phone');
      if (message.phone) {
        phoneElement.textContent = message.phone;
      } else {
        phoneElement.classList.add('hidden');
      }
      
      const serviceElement = messageCard.querySelector('.message-service');
      if (message.service && message.service !== '') {
        serviceElement.textContent = getServiceName(message.service);
      } else {
        serviceElement.classList.add('hidden');
      }
      
      messageCard.querySelector('.message-content').textContent = message.message;
      
      // Set button actions
      const markSeenBtn = messageCard.querySelector('.mark-seen-btn');
      const deleteBtn = messageCard.querySelector('.delete-btn');
      
      if (!showMarkSeen) {
        markSeenBtn.classList.add('hidden');
      } else {
        markSeenBtn.addEventListener('click', function() {
          markMessageAsSeen(message.id);
        });
      }
      
      deleteBtn.addEventListener('click', function() {
        deleteMessage(message.id);
      });
      
      // Add data-id attribute for reference
      messageCard.setAttribute('data-id', message.id);
      
      // Insert before the no-messages element
      container.insertBefore(messageCard, container.firstChild);
    });
  }
  
  function markMessageAsSeen(id) {
    const messages = getMessages();
    const updatedMessages = messages.map(msg => {
      if (msg.id === id) {
        return { ...msg, seen: true };
      }
      return msg;
    });
    
    saveMessages(updatedMessages);
    loadMessages();
  }
  
  function deleteMessage(id) {
    if (confirm('هل أنت متأكد من حذف هذه الرسالة؟')) {
      const messages = getMessages();
      const updatedMessages = messages.filter(msg => msg.id !== id);
      
      saveMessages(updatedMessages);
      loadMessages();
    }
  }
  
  function getServiceName(serviceValue) {
    const services = {
      'web': 'تطوير مواقع الويب',
      'app': 'تطوير التطبيقات',
      'ui': 'تصميم واجهات المستخدم',
      'maintenance': 'الصيانة والدعم الفني',
      'other': 'خدمات أخرى'
    };
    
    return services[serviceValue] || serviceValue;
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  // Local Storage Helpers
  function getMessages() {
    const messagesJSON = localStorage.getItem('contactMessages');
    return messagesJSON ? JSON.parse(messagesJSON) : [];
  }
  
  function saveMessages(messages) {
    localStorage.setItem('contactMessages', JSON.stringify(messages));
  }
  
  // For testing - add some sample messages if none exist
  function addSampleMessages() {
    if (getMessages().length === 0) {
      const sampleMessages = [
        {
          id: 'msg1',
          name: 'أحمد محمد',
          email: 'ahmed@example.com',
          phone: '+966 55 123 4567',
          service: 'web',
          message: 'أرغب في إنشاء موقع إلكتروني لشركتي، هل يمكنكم مساعدتي؟',
          date: new Date().toISOString(),
          seen: false
        },
        {
          id: 'msg2',
          name: 'سارة العبدالله',
          email: 'sara@example.com',
          phone: '+966 50 987 6543',
          service: 'app',
          message: 'أحتاج إلى تطوير تطبيق للهواتف الذكية. أرجو التواصل معي لمناقشة التفاصيل.',
          date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          seen: false
        },
        {
          id: 'msg3',
          name: 'محمد الشمري',
          email: 'mohammed@example.com',
          phone: '+966 54 456 7890',
          service: 'maintenance',
          message: 'لدي موقع إلكتروني يحتاج إلى صيانة وتحديث. هل تقدمون هذه الخدمة؟',
          date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          seen: true
        }
      ];
      
      saveMessages(sampleMessages);
    }
  }
  
  // Add sample messages for testing
  addSampleMessages();
});
