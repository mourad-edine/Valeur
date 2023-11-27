<template>
<div class="wrapper">
    <div class="sidebar">
        <h2>Titre</h2>
        <ul>
            <li @click="home"><a href="#"><i class="fas fa-home"></i>Home</a></li>
            <li @click="ajouter"><a href="#"><i class="fas fa-user"></i>gestion de stock</a></li>
            <li @click="liste"><a href="#"><i class="fas fa-address-card"></i>liste des commandes</a></li>
            <li @click="dispo"><a href="#"><i class="fas fa-user"></i>liste des produits dispo</a></li>

        </ul> 
    </div>

    <slot/>




</div>
</template>
<script>
export default {
    name: 'Layout',

    methods : {
        ajouter(){
            this.$router.push({name : 'addproduct'})
        },

        home(){
            this.$router.push({name : 'dashboard'})
        },
        liste(){
            this.$router.push({name : 'listes'})
        },
        dispo(){
            this.$router.push({name : 'dispo'})
        }
    }
}
</script>

<style>


body{
   background-color: #f4f4f5;
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  width: 200px;
  height: 100%;
  background: #072541;
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}    

.wrapper .sidebar ul li a{
  color: #fff;
  display: block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}

.wrapper .sidebar ul li:hover{
  background-color: #94a3b8;
}
    
.wrapper .sidebar ul li:hover a{
  color: #fff;
}
 


.wrapper .main_content{
  width: 100%;
  margin-left: 200px;
}

.wrapper .main_content .header{
  padding: 20px;
  background: #f97316;
  color: white;
  border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info{
  margin: 20px;
  color: black;
  line-height: 25px;
}

.wrapper .main_content .info div{
  margin-bottom: 20px;
}

</style> 