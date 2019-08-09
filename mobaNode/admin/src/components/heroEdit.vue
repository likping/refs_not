<template>
  <div>
    <p>{{id ? "编辑":"新建"}}英雄</p>
    <el-form @submit.native.prevent="save">
      <el-tabs value="skills" type="border-card">
        <el-tab-pane label="基础信息">
          <el-form-item label="名称" prop="name">
            <div class="input-el">
              <el-input v-model="model.name" width="80%"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="称号" prop="name">
            <div class="input-el">
              <el-input v-model="model.title" width="80%"></el-input>
            </div>
          </el-form-item>

          <el-form-item label="头像" prop="avater">
            <div class="input-el">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL+'/upload'"
                :show-file-list="false"
                :on-success="afterUpLoad"
              >
                <img v-if="model.avater" :src="model.avater" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon" style="  line-height: 178px;"></i>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item label="英雄类型" prop="name">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item of Categories"
                :label="item.name"
                :key="item._id"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="顺风出装" prop="name">
            <el-select v-model="model.items1" multiple>
              <el-option
                v-for="item of items1"
                :label="item.name"
                :key="item._id"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装" prop="name">
            <el-select v-model="model.items2" multiple>
              <el-option
                v-for="item of items2"
                :label="item.name"
                :key="item._id"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度" prop="name">
            <div class="input-el">
              <el-rate :max="9" show-score v-model="model.scores.difficult" width="80%"></el-rate>
            </div>
          </el-form-item>
          <el-form-item label="技能" prop="name">
            <div class="input-el">
              <el-rate :max="9" show-score v-model="model.scores.skills" width="80%"></el-rate>
            </div>
          </el-form-item>
          <el-form-item label="攻击" prop="name">
            <div class="input-el">
              <el-rate :max="9" show-score v-model="model.scores.attack" width="80%"></el-rate>
            </div>
          </el-form-item>
          <el-form-item label="生存" prop="name">
            <div class="input-el">
              <el-rate :max="9" show-score v-model="model.scores.survive" width="80%"></el-rate>
            </div>
          </el-form-item>
          <el-form-item label="使用技巧">
            <div class="input-el">
              <el-input type="textarea" v-model="model.usageTips" width="80%"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <div class="input-el">
              <el-input type="textarea" v-model="model.battleTips" width="80%"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="团战思路">
            <div class="input-el">
              <el-input type="textarea" v-model="model.teamTips" width="80%"></el-input>
            </div>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="名称" prop="name">
                <div class="input-el">
                  <el-input v-model="item.name" width="80%"></el-input>
                </div>
              </el-form-item>

              <el-form-item label="头像" prop="avater">
                <div class="input-el">
                  <el-upload
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL+'/upload'"
                    :show-file-list="false"
                    :on-success="res=>$set(item,'icon',res.url)"
                  >
                    <img v-if="item.icon" :src="item.icon" class="avatar" />
                    <i
                      v-else
                      class="el-icon-plus avatar-uploader-icon"
                      style="  line-height: 178px;"
                    ></i>
                  </el-upload>
                </div>
              </el-form-item>
              <el-form-item label="描述">
                <div class="input-el">
                  <el-input type="textarea" v-model="item.discription" width="80%"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="小技巧">
                <div class="input-el">
                  <el-input type="textarea" v-model="item.tips" width="80%"></el-input>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" size="small" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

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
        name: "",
        avater: "",
        scores: {
          difficult: 0,
          skill: 0,
          attack: 0,
          survive: 0
        },
        items1: [],
        items2: [],
        usageTips: "",
        teamTips: "",
        battleTips: "",
        skills: []
      },
      Categories: [],
      items1: [],
      items2: []
    };
  },
  methods: {
    afterUpLoad(res) {
      this.$set(this.model, "avater", res.url);
    },
    async save() {
      if (this.id) {
       await this.$http.put(`/rest/hero/${this.id}`, this.model);
      } else {
       await this.$http.post("/rest/hero", this.model);
      }
      this.$message({
        type: "primary",
        message: "保存成功"
      });
      this.$router.push("/hero/list");
    },
    async fetch() {
      const res = await this.$http.get(`/rest/hero/${this.id}`);
      // 合并，从左向右依次添加，同名覆盖

      this.model = Object.assign({}, this.model, res.data);
    
    },

    async fetchCategories() {
      const res = await this.$http.get(`/rest/categories`);
      this.Categories = res.data;
    },
    async fetchItem() {
      const res = await this.$http.get(`/rest/item`);
      this.items1 = res.data;
      this.items2 = res.data;
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories();
    this.fetchItem();
  }
};
</script>
<style scoped>
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
  width: 5em;
  height: 5em;
  border-radius: 50%;
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
  width: 5em;
  height: 5em;
  text-align: center;
}
.avatar {
 width: 5em;
  height: 5em;
  display: block;
}
</style>
