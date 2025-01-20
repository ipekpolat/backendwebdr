<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="text-h6 text-center custom-login-text">Giriş Yap</div>

        <!-- Form -->
        <form @submit.prevent="login">
          <div>
            <div class="input-label">E-Posta Adresi</div>
            <input v-model="email" class="input-field" type="email" required />
            <div class="input-label">Şifre</div>
            <input
              v-model="password"
              class="input-field"
              type="password"
              required
            />
          </div>

          <button type="submit" class="submit-btn">Giriş Yap</button>
        </form>

        <div class="signup-link">
          Hesabınız Yok Mu? <a href="/registerPage">Üye Olun</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { auth } from "@/firebase/firebase"; // Firebase yapılandırma dosyasını içeri aktarın
import { signInWithEmailAndPassword } from "firebase/auth";

export default Vue.extend({
  name: "LoginPage",
  data() {
    return {
      email: "", // Kullanıcının e-posta adresi
      password: "", // Kullanıcının şifresi
    };
  },
  methods: {
    async login() {
      try {
        // Firebase ile giriş yapma
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        console.log("Giriş Başarılı:", userCredential.user);

        // Başarılı giriş sonrası yönlendirme
        this.$router.push("/");
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Giriş Hatası:", error.message);
          alert("Giriş Hatası: " + error.message);
        } else {
          console.error("Bilinmeyen bir hata oluştu:", error);
        }
      }
    },
  },
});
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
</style>
