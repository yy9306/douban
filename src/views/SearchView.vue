<template>
  <div class="search-view has-header">
    <div class="search">
      <form id="search_form" onsubmit="return false">
        <input
          type="text"
          name="query"
          v-model.trim.lazy="queryStr"
          placeholder="搜索 书 / 影 / 音 / 标签">
        <a href="javascript:void(0);">搜索</a>
      </form>
    </div>
    <div v-if="queryStr" class="search-res">
      <group title="影视" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多影视结果</a>
      </group>
      <group title="图书" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多图书结果</a>
      </group>
      <group title="音乐" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多音乐结果</a>
      </group>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import group from '../components/group'

export default {
  components: {
    group
  },
  data () {
    return {
      queryStr: ''
    }
  },
  computed: {
    ...mapState({
      queryRes_movie: state => state.search.queryRes_movie
    })
  },
  created() {
    const q = this.$route.params.q
    if (q) {
      this.queryStr = q
    }
  }
}
</script>

<style lang="scss" scss>
.search-view {
  .search {
    padding: 0.7rem 2rem;
    border-bottom: 0.1rem solid #F2F2F2;
    overflow: hidden;

    input {
      width: 85%;
      height: 3rem;
      padding: 0.5rem 0.8rem;
      box-sizing: border-box;
      font-size: 1.4rem;
      color: #111;
      background: #f5f5f5;
      border-radius: 0.3rem;
      border: 0;
      outline: 0;
    }

    a {
      display: inline-block;
      float: right;
      width: 10%;
      height: 3rem;
      padding-left: 5%;
      line-height: 3rem;
      font-size: 1.4rem;
      color: #333;
      text-decoration: none;
    }
  }

  .list-link {
    display: block;
    margin-bottom: 1.5rem;
    padding: 1.5rem 0 1.5rem 5rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: #42bd56;
  }
}
</style>
