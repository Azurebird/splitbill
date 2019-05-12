import axios from 'axios';
import { getUserToken } from './auth/auth';

const getAuthorizationHeader = () => ({
  Authorization: `Bearer ${getUserToken()}`
});

export default {
  user: {
    login: async credentials => {
      const response = await axios.post('/api/profile/login', { credentials });
      return response.data.user;
    },
    signUp: async credentials => {
      const response = await axios.post('/api/profile/', { credentials });
      return response.data.user;
    }
  },
  groups: {
    load: async () => {
      const response = await axios.get('/api/groups/', {
        headers: { ...getAuthorizationHeader() }
      });
      return response.data.groups;
    },
    history: async groupId => {
      const response = await axios.get(`/api/groups/${groupId}`, {
        headers: { ...getAuthorizationHeader() }
      });
      return response.data.groups;
    }
  }
};
