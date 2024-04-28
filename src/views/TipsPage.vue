<!-- Page in the SPA -->

<template>
  <div class="col-start-1 col-end-9 overflow-auto row-start-1 row-end-24">
    <div class="flex flex-col justify-start mt-10 ml-8 mr-8 border border-black bg-white">
      <p class="ml-4 mt-4">
        Här är lite tips...
      </p>
      <fwb-accordion
        class="m-4"
        :open-first-item="false"
      >
        <fwb-accordion-panel>
          <fwb-accordion-header class="bg-gray-300">
            Utforska föremålet
          </fwb-accordion-header>
          <fwb-accordion-content>
            <div>
              <p class="mb-2 text-gray-500">
                Fundera över vem som ägde föremålet, vad det varit med om 
                och varför det är viktigt.
              </p>
            </div>
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
          <fwb-accordion-header class="bg-gray-300">
            Utforska sinnena
          </fwb-accordion-header>
          <fwb-accordion-content>
            <div>
              <p class="mb-2 text-gray-500">
                Välj ett sinne (syn, hörsel, smak, lukt, känsel).
                Beskriv hur det påverkar din berättelse.
              </p>
              <p class="text-gray-500">
                Vad ser, hör,
                smakar, luktar eller känner karaktärerna?
              </p>
            </div>
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
          <fwb-accordion-header class="bg-gray-300">
            Skapa känslor
          </fwb-accordion-header>
          <fwb-accordion-content>
            <div>
              <p class="mb-2 text-gray-500">
                Utforska olika känslor och hur de kan förstärka din berättelse.
              </p>
              <p class="mb-2 text-gray-500">
                Beskriv karaktärernas känslor och hur det påverkar vad de säger och gör.
              </p>
            </div>
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
          <fwb-accordion-header class="bg-gray-300">
            Magiskt föremål
          </fwb-accordion-header>
          <fwb-accordion-content>
            <div>
              <p class="mb-2 text-gray-500">
                Välj ett av föremålen och gör det till något magiskt i din berättelse.
              </p>
            </div>
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
          <fwb-accordion-header class="bg-gray-300">
            Använda föremålet på ett annorlunda sätt
          </fwb-accordion-header>
          <fwb-accordion-content>
            <div>
              <p class="mb-2 text-gray-500">
                Tänk ut ett ovanligt sätt att använda föremålet, till exempel
                en gitarr som tennisracket.
              </p>
            </div>
          </fwb-accordion-content>
        </fwb-accordion-panel>
      </fwb-accordion>
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
  import { useRouter } from 'vue-router';
  import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
  FwbButton
} from 'flowbite-vue'

    const router = useRouter();

    const goBack = () => {
      router.back();
    }
  </script>