/* script.js
   - Handles form validation
   - Implements click counter
   - Changes background color randomly
   - Logs status/debug messages
*/

// Debug logger
function logDebug(msg) {
  console.log(msg);
  const el = document.getElementById('debugLog');
  if (el) el.textContent += msg + '\n';
}

// Safe getter
function $(id) {
  const el = document.getElementById(id);
  if (!el) {
    logDebug(`Warning: missing element #${id}`);
  }
  return el;
}

document.addEventListener('DOMContentLoaded', () => {
  logDebug('script.js loaded — DOMContentLoaded');

  // ==========================
  // Form Validation
  // ==========================
  const signupForm = $('signupForm');
  const formMessage = $('formMessage');
  if (signupForm && formMessage) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = $('username')?.value.trim() || '';
      const email = $('email')?.value.trim() || '';
      const password = $('password')?.value.trim() || '';

      if (username.length < 3) {
        formMessage.textContent = '⚠️ Username must be at least 3 characters.';
        formMessage.style.color = 'red';
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        formMessage.textContent = '⚠️ Please enter a valid email address.';
        formMessage.style.color = 'red';
        return;
      }
      if (password.length < 6) {
        formMessage.textContent = '⚠️ Password must be at least 6 characters.';
        formMessage.style.color = 'red';
        return;
      }

      formMessage.textContent = '✅ Registration successful!';
      formMessage.style.color = 'green';
    });
    logDebug('Form validation attached');
  }

  // ==========================
  // Click Counter
  // ==========================
  const counterEl = $('counter');
  const incrementBtn = $('incrementBtn');
  let count = 0;
  if (counterEl && incrementBtn) {
    incrementBtn.addEventListener('click', () => {
      count += 1;
      counterEl.textContent = count;
    });
    logDebug('Click counter attached');
  }

  // ==========================
  // Background Color Changer
  // ==========================
  const colorBtn = $('colorBtn');
  const colorValue = $('colorValue');
  const colors = ['#FFB6C1', '#ADD8E6', '#90EE90', '#FFD700', '#FFA07A', '#F4F4F4'];

  if (colorBtn) {
    colorBtn.addEventListener('click', () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
      if (colorValue) colorValue.textContent = randomColor;
      logDebug('Background color changed to ' + randomColor);
    });
    logDebug('Color changer attached');
  }
});
