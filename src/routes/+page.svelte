<script lang="ts" >
	import { browser } from "$app/environment";
    import { onMount } from "svelte";
    let randomizedText: string
    const values = ["developer", "designer", "meme enjoyer"]
    let index = 0
    setInterval(()=>{
        randomizedText=values[index]
        index++
        if(index==3){
            index=0
        }
    }, 1500)
    // onMount(()=>{
    //     if (browser){
    //         if (!localStorage.getItem("subbed")){
    //             window.location.href="/subscribe"
    //         }
    //     }
    // })
</script>

<header class=" flex justify-between items-center p-3 h-24 backdrop-blur-md sticky top-0 border-b-2" >
    <h1 class=" font-bold " >TheCodeCoo</h1>
    <a href="/posts" class=" hover:underline">
        <h1>Posts</h1>
    </a>
    <a href="#sub" class=" hover:underline">
        <h1>Subscribe</h1>
    </a>
</header>
<main class=" h-screen mt-20 px-3">
    <h1 class=" text-3xl font-bold">Coocoo fellow developer! </h1>
    <h1 class=" text-xl" >Welcome to The Code Coo, a fun newsletter focused on web development and great memes stolen from the internet.</h1>    
    <h1 class=" text-xl">I am  <a href="https://github.com/TheWisePigeon" class=" text-yellow-400 underline">The Wise Pigeon</a> and here is a short list 
    of the spicy stuff you will be getting from the coop</h1>
</main>