<template>
  <div class="login-page">
    <div class="login-container">
      <div class="card">
        <div class="card-header">
          <div class="text-h6 text-center custom-login-text">Kayıt Ol</div>
        </div>

        <form @submit.prevent="signUp" class="login-form">
          <div class="form-field">
            <label for="email">E-Posta Adresi</label>
            <input v-model="email" id="email" type="email" class="input-field" />
          </div>

          <div class="form-field">
            <label for="password1">Şifre</label>
            <input v-model="password1" id="password1" type="password" class="input-field" />
          </div>

          <div class="form-field">
            <label for="password2">Şifre Tekrar</label>
            <input v-model="password2" id="password2" type="password" class="input-field" />
          </div>

          <button type="submit" class="submit-btn">Kayıt Ol</button>
        </form>

        <div class="text-center" style="margin-top: 20px; font-weight: 500">
          Hesabınız var mı?
          <span>
            <a href="#" style="color: blue; margin-left: 5px"
              >Üye girişi</a
            >
          </span>
        </div>
      </div>

      <div class="login-image" style="margin-left: 20%;">
        <img
          src="https://i.dr.com.tr/pimages/Content/Uploads/LandingPage/frontend-assets/login-img.webp"
          alt="Login Image"
        />
      </div>
    </div>

    <!-- Dialog for showing messages -->
    <div v-if="dialogVisible" class="dialog">
      <div class="dialog-content">
        <div :class="dialogMessageClass">{{ dialogMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { auth } from '../firebase/firebase'; // Firebase config dosyanızın yolu
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase auth fonksiyonu


// Form alanları için reaktif değişkenler
const email = ref('');
const password1 = ref('');
const password2 = ref('');
const dialogMessage = ref('');
const dialogMessageClass = ref('');
const dialogVisible = ref(false);

// signUp method for form submission
async function signUp() {
  if (password1.value !== password2.value) {
    dialogMessage.value = 'Şifreler uyuşmuyor.';
    dialogMessageClass.value = 'negative';
    showDialog();
    return;
  }

  try {
    // Firebase Auth ile kullanıcı kaydı
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password1.value
    );
    console.log('asdojnsaojdsamd:', userCredential.user);

    dialogMessage.value = 'Üye kaydı başarılı!';
    dialogMessageClass.value = 'positive';
    showDialog();

    // Alanları temizle
    email.value = '';
    password1.value = '';
    password2.value = '';
  } catch (error: any) {
    console.error('Kayıt Hatası:', error.message);
    dialogMessage.value = `Hata: ${error.message}`;
    dialogMessageClass.value = 'negative';
    showDialog();
  }
}

// Show dialog with message
function showDialog() {
  dialogVisible.value = true;
  setTimeout(() => {
    dialogVisible.value = false;
  }, 3000); // Hide dialog after 3 seconds
}
</script>

<style scoped >
.transparent-card {
  background-color: transparent;
  border: none;
  box-shadow: none;
  margin-top: 50px;
  margin-left: 270px;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.custom-login-text {
  font-family: SFProDisplay, arial, sans-serif;
  font-size: 22px;
  font-weight: bolder;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  margin-bottom: 15px;
}

.card {
  max-width: 370px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-form {
  width: 100%;
}

.form-field {
  margin-bottom: 15px;
}

.form-field label {
  font-weight: 500;
  display: block;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  background-color: #084793;
  color: white;
  font-family: inherit;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #063c6b;
}

.login-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
}

.login-image {
  flex: 1;
  text-align: right;
}

.login-image img {
  max-width: 100%;
  max-height: 100%;
}

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dialog-content {
  text-align: center;
  font-weight: bold;
}

.negative {
  color: red;
}

.positive {
  color: green;
}
</style>
