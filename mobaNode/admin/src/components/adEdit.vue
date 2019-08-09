<template>
  <div>
    <p>{{id ? "编辑":"新建"}}广告</p>
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称" prop="name">
        <div class="input-el">
          <el-input v-model="model.name" width="80%"></el-input>
        </div>
      </el-form-item>
     <el-form-item>
         <div class="input-el">
        <el-button @click="model.items.push({})">
          <i class="el-icon-plus"></i>添加广告
        </el-button> 
         </div>
      
        <el-form-item>
        <el-row type="flex" style="flex-wrap:wrap">
          <el-col :md="12" v-for="(item,i) in model.items" :key="i">
           <el-form-item label="链接">
              <div class="input-el">
                <el-input type="text" v-model="item.url" width="80%"></el-input>
              </div>
            </el-form-item>
            <el-form-item label="图片" prop="avater"  class="image-ui">
              <div class="input-el">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL+'/upload'"
                  :show-file-list="false"
                  :on-success="res=>$set(item,'image',res.url)"
                >
                  <img  style="border-radius:0px" v-if="item.image" :src="item.image" class="avata" />
                  <i v-else class="el-icon-plus avatar-uploader-icon" style="  line-height: 178px;"></i>
                </el-upload>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" size="small" @click="model.items.splice(i,1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
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
      model: {
        items: []
      }
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/ad/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/ad", this.model);
      }
      this.$message({
        type: "primary",
        message: "保存成功"
      });
      this.$router.push("/ad/list");
    },
    async fetch() {
      const res = await this.$http.get(`/rest/ad/${this.id}`);

      this.model = Object.assign({}, this.model, res.data);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
<style scoped>
.el-button {
  position: relative;
  left: 50%;
}
.input-el {
  width: 40%;
  display: inline-block;
  margin-left: 26px;
}

.image-ui{
  margin-top:20px;
}
.el-upload,.avatar-uploader-icon{
     min-width:5rem;
      height:5rem;
      display: block;
}
img{
      min-width:5rem;
      height:5rem;
      display: block;
}
</style>
