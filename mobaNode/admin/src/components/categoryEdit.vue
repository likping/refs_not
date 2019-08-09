<template>
  <div>
    <p>{{id ? "编辑":"新建"}}分类</p>
    <el-form @submit.native.prevent="save">
      <el-form-item label="上级分类" prop="parent">
      <el-select v-model="model.parent" placeholder="请选择">
      <el-option
      v-for="item in parentOptions"
      :key="item.name"
      :label="item.name"
      :value="item._id">
    </el-option>
     </el-select>
    </el-form-item>
      <el-form-item label="名称" prop="name">
        <div class="input-el">
             <el-input v-model="model.name" width="80%"></el-input>
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
         await this.$http.put(`/rest/categories/${this.id}`, this.model);
      }else{
       await this.$http.post("/rest/categories", this.model);
      }
      this.$message({
        type: "primary",
        message: "保存成功"
      });
      this.$router.push("/categories/list")
    },
    async fetch() {
      const res = await this.$http.get(`/rest/categories/${this.id}`);
      this.model = res.data;
   
    },
    async fetchParentOption(){
       const res = await this.$http.get(`/rest/categories`);
    
      this.parentOptions=res.data
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchParentOption()
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
