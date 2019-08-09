<template>
  <el-container style="height: 50%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu  unique-opend default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/create" @click="linkto">创建分类</el-menu-item>
            <el-menu-item index="/categories/list" @click="linkto">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">物品</template>
            <el-menu-item index="/item/create" @click="linkto">新建物品</el-menu-item>
            <el-menu-item index="/item/list" @click="linkto">物品列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">英雄</template>
            <el-menu-item index="/hero/create" @click="linkto">新建英雄</el-menu-item>
            <el-menu-item index="/hero/list" @click="linkto">英雄列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/article/create" @click="linkto">新建文章</el-menu-item>
            <el-menu-item index="/article/list" @click="linkto">文章列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">广告位</template>
            <el-menu-item index="/ad/create" @click="linkto">新建广告位</el-menu-item>
            <el-menu-item index="/ad/list" @click="linkto">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
           <template slot="title">
            <i class="el-icon-message"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/article/create" @click="linkto">新建文章</el-menu-item>
            <el-menu-item index="/article/list" @click="linkto">文章列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">广告位</template>
            <el-menu-item index="/ad/create" @click="linkto">新建广告位</el-menu-item>
            <el-menu-item index="/ad/list" @click="linkto">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

           <el-submenu index="3">
           <template slot="title">
            <i class="el-icon-message"></i>系统管理
          </template>
   
         <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/create" @click="linkto">创建分类</el-menu-item>
            <el-menu-item index="/categories/list" @click="linkto">分类列表</el-menu-item>
          </el-menu-item-group>
      
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_user/create" @click="linkto">创建管理员</el-menu-item>
            <el-menu-item index="/admin_user/list" @click="linkto">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <div class="views">
        <router-view></router-view>
      </div>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    linkto(e) {
      this.$router.push(`${e.index}`);
    }
  }
};
</script>

<style scoped>
.el-header {
  background: burlywood;
}
.el-container {
  background: lightslategray;
}
.views {
  width: 100%;
  height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

