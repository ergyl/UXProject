<!-- Page in the SPA -->

<template>
  <div class="flex flex-col justify-start mt-10 ml-8 mr-8 border border-black bg-white overflow-scroll">
    <h2 class="self-center mt-4">
      För lärare
    </h2>
    <fwb-accordion
      class="m-4"
      :open-first-item="false"
    >
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-bla rounded-t-xl">
          Introduktion och spel
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <ul class="list-disc mb-2 text-gray-500">
              <li>Introducera spelet och karaktären Mullvard till eleverna.</li>
              <li>Berätta att de ska använda föremålen de samlat in under spelet som inspiration för att skriva berättelser.</li>
              <li>Låt eleverna spela och samla historiska föremål.</li>
            </ul>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-bla">
          Skapande av berättelser
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <ul class="list-disc mb-2 text-gray-500">
              <li>Be eleverna välja ett eller flera föremål från sina ryggsäckar som de vill skriva en berättelse om.</li>
              <li>Ge dem tid att planera sina berättelser. För inspiration - tryck på penn-ikonen"</li>
              <li>Uppmuntra dem att använda sin fantasi och kreativitet för att utveckla en spännande och sammanhängande berättelse</li>
            </ul>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-bla">
          Mål med uppgiften
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="pb-2 font-bold text-gray-500">
              Eleverna ska:<br>
            </p>
            <ul class="list-disc mb-2 text-gray-500">
              <li class="pb-1">
                Använda de historiska föremålen i sin ryggsäck som inspiration för att skriva berättelser
              </li>
              <li>Utveckla sina skrivfärdigheter genom att skapa tydliga och sammanhängande texter</li>
            </ul>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-bla">
          Kopplingar till LGR22
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2 text-gray-500">
              Svenska, centralt innehåll<br>
              Årskurs 1-3 samt 4-6
            </p>
            <ul class="list-disc mb-2 text-gray-500">
              <li>Skapande av texter där ord och bild samspelar (Skolverket, 2022, s.226-227)</li>
              <li>Var gärna kreativ och arbeta ämnesövergripande! Kanske med Historia eller Bild? </li>
            </ul>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>
  </div>
</template>
    
    <script setup>
    import { useRouter } from 'vue-router';
    import {
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel,
  } from 'flowbite-vue'
  
      const router = useRouter();
  
      const goBack = () => {
        router.back();
      }
    </script>