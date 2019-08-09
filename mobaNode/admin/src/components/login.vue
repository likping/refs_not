<template>
  <div class="login">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="save">
        <el-form-item label="用户" prop="name">
          <div class="input-el">
            <el-input v-model="model.username" width="80%"></el-input>
          </div>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <div class="input-el">
            <el-input  type="password" v-model="model.password" width="80%"></el-input>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
      async save(){
             const res= await this.$http.post('/login',this.model)
              localStorage.token=res.data.token
              this.$router.push("/")
              this.$message({
                  type:"success",
                  message:"登录成功"
              })
      }
  },
};
</script>
<style scoped>
.login-card {
  width: 400px;
  height: 400px;
  margin: 50px auto;
}
.input-el{
     position: relative;
     width: 75%;
}
</style>

