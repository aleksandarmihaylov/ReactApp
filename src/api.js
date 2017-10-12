import axios from "axios";

class Api {
  async getUsers() {
    try {
      const { data } = await axios.get("http://localhost:3001/users");
      return data;
    } catch (error) {
      return `Error while fetching users - ${error}`;
    }
  }

  async geUser(id) {
    try {
      const { data } = await axios.get(`http://localhost:3001/users/${id}`);
      return data;
    } catch (error) {
      return `Error while fetching user - ${error}`;
    }
  }
}

export default new Api();
