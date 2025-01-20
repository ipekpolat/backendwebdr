<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="text-h6 text-center custom-login-text">Giriş Yap</div>

        <!-- Tab Buttons for Email or Phone -->
        <div class="tab-buttons">
          <button @click="tab = 'email'" :class="{'active': tab === 'email'}">E-Posta</button>
          <button @click="tab = 'phone'" :class="{'active': tab === 'phone'}">Cep Telefonu</button>
        </div>

        <!-- Form -->
        <form @submit.prevent="login">
          <!-- Email Tab -->
          <div v-if="tab === 'email'">
            <div class="input-label">E-Posta Adresi</div>
            <input v-model="email" class="input-field" type="email" />
            <div class="input-label">Şifre</div>
            <input v-model="password" class="input-field" type="password" />
          </div>

          <!-- Phone Tab -->
          <div v-if="tab === 'phone'">
            <div class="input-label">Cep Telefonu</div>
            <input v-model="phone" class="input-field" type="tel" />
          </div>

          <div class="checkbox-group">
            <label>
              <input type="checkbox" v-model="right" /> Beni Hatırla
            </label>
            <span>
              <a href="https://www.dr.com.tr/sifremiunuttum" style="color: red;">Şifremi Unuttum</a>
            </span>
          </div>

          <!-- Recaptcha -->
          <div class="recaptcha-section">
            <input type="checkbox" v-model="robot" @click="startSpinner" :disabled="showSpinner" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png" alt="Recaptcha" class="recaptcha-logo" />
            <div v-if="showSpinner" class="spinner">Loading...</div>
          </div>

          <button type="submit" class="submit-btn">Giriş Yap</button>
        </form>

        <div class="signup-link">
          Hesabınız Yok Mu? <a href="https://www.dr.com.tr/uyeol">Üye Olun</a>
        </div>
      </div>
    </div>

    <!-- Privacy Policy Dialog -->
    <div v-if="showDialog" class="dialog">
      <div class="dialog-header">
        <span>Gizlilik Politikası</span>
        <button @click="closePrivacyPolicyDialog">Kapat</button>
      </div>
      <div v-html="privacyPolicyText"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('email');
const email = ref('');
const password = ref('');
const phone = ref('');
const right = ref(false);
const robot = ref(false);
const showSpinner = ref(false);
const showDialog = ref(false);

const login = () => {
  if (tab.value === 'email') {
    console.log('E-posta ile giriş yapılıyor:', email.value, password.value);
  } else {
    console.log('Cep telefonu ile giriş yapılıyor:', phone.value);
  }
};

// Start spinner when reCaptcha is clicked
const startSpinner = () => {
  showSpinner.value = true;
  setTimeout(() => {
    showSpinner.value = false;
    robot.value = true;
  }, 2000);
};

// Show Privacy Policy Dialog
const privacyPolicyText = ref(`
  Gizlilik politikası metni burada yer alacak...
`);

const showPrivacyPolicy = () => {
  showDialog.value = true;
};

const closePrivacyPolicyDialog = () => {
  showDialog.value = false;
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  width: 100%;
  max-width: 370px;
}

.login-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.custom-login-text {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

.tab-buttons button {
  padding: 10px 20px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.tab-buttons button.active {
  background-color: #084793;
  color: white;
}

.input-label {
  margin-bottom: 5px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.checkbox-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.recaptcha-section {
  position: relative;
}

.recaptcha-logo {
  width: 50px;
  margin-top: 10px;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #084793;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #084793;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.signup-link {
  text-align: center;
  margin-top: 20px;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-header {
  background-color: white;
  padding: 10px;
  width: 100%;
  text-align: center;
}

.dialog-header button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
