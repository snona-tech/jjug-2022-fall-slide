<template>
    <!-- <footer v-if="$slidev.nav.currentLayout !== 'cover'" class="absolute bottom-0 w-full text-white flex items-end justify-between bg-[#FF7922] opacity-60"> -->
    <footer v-if="$slidev.nav.currentLayout !== 'cover'" class="absolute bottom-0 w-full text-white flex items-end justify-between bg-[#FF7922]">
        <img src="/images/casareal.png" class="pl-3 p-1 w-30">
        <p class="text-xs pb-1">&copy; 2022 CASAREAL,inc.&emsp;&emsp;{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}&emsp;&emsp;</p>
    </footer>
</template>