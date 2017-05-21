<template id="">
  <div class="">
     <header-bar @showTalion="open"></header-bar>
     <router-view></router-view>
     <talion-view v-show="talion" @closeTalion="close"></talion-view>
  </div>
</template>

<script type="text/javascript">
import HeaderBar from '../components/HeaderBar'
import TalionView from '../views/TalionView'


 export default{
   components: {
     HeaderBar,
     TalionView
   },
   data() {
     return {
       talion: false
     }
   },
   methods: {
     open() {
       this.talion = true
     },
     close() {
       this.talion = false
     }
   }
 }
</script>

<style media="screen">

</style>
