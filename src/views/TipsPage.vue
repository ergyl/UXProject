<template>
  <div class="col-start-1 col-end-9 row-start-1 overflow-auto row-end-24">
    <div class="flex flex-col h-4/6 overflow-auto justify-start mt-10 ml-8 mr-8 border-2 border-black bg-white">
      <section class="pl-2 pr-2 pt-4">
        <fwb-heading
          tag="h5"
        >
          Utforska föremålet
        </fwb-heading>
        <p>
          Fundera över vem som ägde föremålet, vad det varit med om 
          och varför det är viktigt.
        </p>
      </section>

      <section class="pl-2 pr-2">
        <fwb-heading
          tag="h5"
          class="pt-2"
        >
          Utforska sinnena
        </fwb-heading>
        <p>
          Välj ett sinne (syn, hörsel, smak, lukt, känsel).
          Beskriv hur det påverkar din berättelse. Vad ser, hör,
          smakar, luktar eller känner karaktärerna?
        </p>
      </section>

      <section class="pl-2 pr-2">
        <fwb-heading
          tag="h5"
          class="pt-2"
        >
          Skapa känslor
        </fwb-heading>
        <p>
          Utforska olika känslor och hur de kan förstärka din berättelse.
          Beskriv karaktärernas känslor och hur det påverkar vad de säger och gör.
        </p>
      </section>

      <section class="pl-2 pr-2">
        <fwb-heading
          tag="h5"
          class="pt-2"
        >
          Magiskt föremål
        </fwb-heading>
        <p>
          Välj ett av föremålen och gör det till något magiskt i din berättelse.
        </p>
      </section>

      <section class="pl-2 pr-2">
        <fwb-heading
          tag="h5"
          class="pt-2"
        >
          Använda föremålet på ett "fel" sätt
        </fwb-heading>
        <p>
          Tänk ut ett ovanligt sätt att använda föremålet, till exempel
          en gitarr som tennisracket.
        </p>
      </section>
    </div>

    <div class="ml-5">
      <fwb-button
        color="default"
        size="xl"
        class="m-4"
        @click="goBack"
      >
        <template #prefix>
          <span class="icon-[material-symbols-light--close] w-5 h-5 inline-block align-middle" />
        </template>
        Stäng
      </fwb-button>
    </div>
  </div>
</template>
  
  <script setup>
  import { FwbButton } from 'flowbite-vue';
  import { FwbHeading } from 'flowbite-vue';
  import { useRouter } from 'vue-router';

    const router = useRouter();

    const goBack = () => {
      router.back();
    }
  </script>