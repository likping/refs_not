<template>
  <div>
    <p>{{id ? "编辑":"新建"}}分类</p>
    <el-form @submit.native.prevent="save">
  
      <el-form-item label="账号" prop="name">
        <div class="input-el">
             <el-input v-model="model.username" width="80%"></el-input>
        </div>
      </el-form-item>
        <el-form-item label="密码" prop="name">
        <div class="input-el">
             <el-input  type="password" v-model="model.password" width="80%"></el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      parentOptions:[]
    }
  },
  methods: {
    async save() {
      if(this.id){
         await this.$http.put(`/rest/admin_user/${this.id}`, this.model);
      }else{
       await this.$http.post("/rest/admin_user", this.model);
      }
      this.$message({
        type: "primary",
        message: "保存成功"
      });
      this.$router.push("/admin_user/list")
    },
    async fetch() {
      const res = await this.$http.get(`/rest/admin_user/${this.id}`);
      this.model = res.data;
   
    },
   
  },
  created() {
    this.id && this.fetch();
  
  }
};
</script>
<style>
.el-button {
  position: relative;
  left: 50%;
}
.input-el{
  width:80%;
  display: inline-block;
  margin-left:26px;
}

</style>
