<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Kelso du Mez</strong>, a third year game design student at the University of Canterbury.<br/>

        Game Development is a strong passion of mine, with most of my expertise lying in gameplay programming in Unity and Unreal, I also have experience working in VR.

      </div>

      <!-- <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">games</router-link></div> on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div> -->

      <div style="margin-top: 40px;">I'm <strong>currently looking for work experience</strong>, specifically programming positions, but feel free to get in touch even if you just want to have a chat. <br/>
        
        You can reach me at <a href="mailto:kelsodumez@gmail.com">kelsodumez@gmail.com</a> or <router-link to="/contact">here</router-link>.</div>
   
    </div>

    <div class="photo">
      <img src="img/resume-photo-modified.png" height="400" width="400" alt="Kelso du Mez"/>
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>