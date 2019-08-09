<template>
  <div>
    <p>{{id ? "编辑":"新建"}}文章</p>
    <el-form @submit.native.prevent="save">
      <el-form-item label="所属分类" prop="articleCategories">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in Categories"
            :key="item.name"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标题" prop="title">
        <div class="input-el">
          <el-input v-model="model.title" width="80%"></el-input>
        </div>
      </el-form-item>

      <el-form-item label="详情" prop="body">
        <div class="input-el">
          <vue-editor v-model="model.body" width="80%" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {VueEditor} from "vue2-editor";

export default {
  props: {
    id: {}
  },
  components: {
   VueEditor
  },
  data() {
    return {
      model: {},
      Categories: []
    };
  },
  methods: {
    async save() {
      if (this.id) {
         await this.$http.put(
          `/rest/article/${this.id}`,
          this.model
        );
      } else {
     await this.$http.post("/rest/article", this.model);
      }
      this.$message({
        type: "primary",
        message: "保存成功"
      });
      this.$router.push("/article/list");
    },
    async fetch() {
      const res = await this.$http.get(`/rest/article/${this.id}`);

      this.model = res.data;
     
    },
    async fetchCategories() {
      const res = await this.$http.get(`/rest/categories`);
      this.Categories = res.data;
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
 
      const  formData = new FormData();
      formData.append("file", file);
      
     const res =await this.$http.post('upload',formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader()
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories();
  }
};
</script>
<style>
.el-button {
  position: relative;
  left: 50%;
}
.input-el {
  width: 80%;
  display: inline-block;
  margin-left: 26px;
}
</style>
