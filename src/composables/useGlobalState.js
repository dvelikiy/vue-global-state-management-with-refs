// TODO: implement global state with Vue refs
// HINT: use a closure
import { ref } from 'vue';

const profileData = ref({
  name: '',
  jobTitle: '',
  department: '',
});

const currentTime = ref(new Date().toLocaleString());

export const useGlobalState = () => {
  return {
    profileData,
    currentTime,
  };
};
