import axios from 'axios';

/** @deprecated */
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
  categories: {
    load: async credentials => {
      const categories = [
        { name: 'Familia' },
        { name: 'Mosa' },
        { name: 'Hermano' }
      ];
      return categories;
    }
  }
};
