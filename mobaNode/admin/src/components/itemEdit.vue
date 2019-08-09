<template>
  <div>
    <p>{{id ? "编辑":"新建"}}物品</p>
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称" prop="name">
        <div class="input-el">
          <el-input v-model="model.name" width="80%"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="图标" prop="icon">
          <div class="input-el">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :show-file-list="false"
          :on-success="afterUpLoad"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon" style="  line-height: 178px;"></i>
      
        </el-upload> 
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
      model: {}
    };
  },
  methods: {
      afterUpLoad(res){
          this.$set(this.model,'icon',res.url)
      },
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/item/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/item", this.model);
      }
      this.$message({
        type: "primary",
        message: "保存成功"
      });
      this.$router.push("/item/list");
    },
    async fetch() {
      const res = await this.$http.get(`/rest/item/${this.id}`);
      this.model = res.data;
      this.parentOptions = res.data;
    },
    async fetchParentOption() {
      const res = await this.$http.get(`/rest/item`);
      this.parentOptions = res.data;
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchParentOption();
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: blueviolet;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
