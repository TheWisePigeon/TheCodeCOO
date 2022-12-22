<script lang="ts" >
	import { browser } from "$app/environment";
    import { onMount } from "svelte";

    // onMount(()=>{
    //     if (browser){
    //         if (!localStorage.getItem("subbed")){
    //             window.location.href="/subscribe"
    //         }
    //     }
    // })
</script>


<header class=" flex justify-between items-center ">
    <a class=" font-bold text-2xl flex" href="/" >
        The Code Coo
        <img src="/pigeon.png" alt="" class=" w-10 h-10 animate-bounce">
    </a>
    <div class=" flex gap-10" >
        <a class=" hover:underline font-semibold" href="/subscribe" >
            <h1>Subscribe</h1>
        </a>
        <a class=" hover:underline font-semibold" href="/about" >
            <h1>About</h1>
        </a>
    </div>
</header>
<main class=" h-screen" >
    
</main>