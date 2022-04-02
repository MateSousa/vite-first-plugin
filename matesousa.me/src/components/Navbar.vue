<template>
    <header>
        <!-- logo -->
        <nav class="nav">
            <div class="right">

                <a         
                href="https://www.twitch.tv/foxiieeeeee"
                target="_blank"        
                >
                    <p lt-md:hidden>Streams</p>
                    <div i-carbon-flow-stream class="md:hidden" />
                </a>

                <router-link
                to="/projects"
                >
                    <p lt-md:hidden >Projects</p>
                    <div i-carbon-development/>
                </router-link>
                
                <router-link
                to="/bookmarks">
                    <p lt-md:hidden>Bookmarks</p>
                    <div i-carbon-bookmark/>
                </router-link>
                
                <a 
                href="https://twitter.com/matedev_" 
                target="_blank"
                i-carbon-logo-twitter
                />

                <a 
                href="https://github.com/MateSousa" 
                target="_blank"
                i-carbon-logo-github    
                />

                <a
                href="https://www.linkedin.com/in/matesousa/"
                target="_blank"
                i-carbon-logo-linkedin
                />

                <ToggleTheme />

            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
