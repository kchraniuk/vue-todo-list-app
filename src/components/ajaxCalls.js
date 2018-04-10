import axios from 'axios'

export default {
  data () {
    return {
      baseUrl: 'http://localhost:3000/tasks/',
      headersSettings: { headers: {'Content-Type': 'application/json'} }
    }
  },
  methods: {
    axiosGetTasks: function () {
      return axios.get(this.baseUrl)
    },
    axiosAddTask: function (data) {
      return axios.post(this.baseUrl, data, this.headersSettings)
    },
    axiosRemoveTask: function (idItem) {
      return axios.delete(this.baseUrl + idItem, this.headersSettings)
    },
    axiosUpdateStatus: function (idItem, body) {
      return axios.put(this.baseUrl + idItem, body)
    }
  }
}
