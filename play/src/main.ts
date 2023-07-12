import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import JayUi from 'jayden-ui';
const app = createApp(App);

app.use(JayUi);
app.mount('#app');
