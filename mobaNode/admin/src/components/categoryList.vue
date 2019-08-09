<template>
  <el-main>
    <span>分类列表</span>
    <el-table :data="model">
      <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
      <el-table-column prop="parent.name" label="上级分类" width="220px "></el-table-column>
      <el-table-column prop="name" label="名称" width="220px"></el-table-column>
      <el-table-column fixed="right" label="操作" width="220px">
        <template slot-scope="scope" style="text-align:left">
          <el-button
            @click="edit(scope.row)"
            type="text"
            size="small"
            style=" position: relative;left:0%;"
          >编辑</el-button>
          <el-button
            @click="remove(scope.row)"
            type="text"
            size="small"
            style=" position: relative; left:0%;"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      model: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/rest/categories");
      
      this.model = res.data;
    },
    edit(row){
           this.$router.push(`/categories/edit/${row._id}`)
    },
     remove(row){
          this.$confirm(`确定要删除"${row.name}"`, '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                 }).then(async ()=>{
                       await this.$http.delete(`/rest/categories/${row._id}`)
                        this.$message({
                          type:"text",
                          message:"删除成功"
                        })
                 })  
           //created 不适用于数据的即时更新加载
         this.$router.push("/categories/list")   
  }
  },
  created() {
    this.fetch();
  }
};
</script>
<style>
.el-message-box{
  color: aqua;
}
.el-message-box__message p{
   position: relative;
   left: 86%;
}
.el-message-box__title span{
    position: relative;
   left: 5%;
   color:red;

}
</style>


