import axios from "axios";

/** @deprecated */
export default {
  user: {
    login: credentials =>
      axios
        .post("/api/profile/login", { credentials })
        .then(response => response.data.user)
  }
};
