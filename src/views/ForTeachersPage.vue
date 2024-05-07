<!-- Page in the SPA -->

<template>
    <div class="col-start-1 col-end-9 overflow-auto row-start-1 row-end-24">
      <div class="flex flex-col justify-start mt-10 ml-8 mr-8 border border-black bg-white">
        <fwb-accordion
          class="m-4"
          :open-first-item="false"
        >
          <fwb-accordion-panel>
            <fwb-accordion-header class="bg-gray-300">
              Introduktion och spel
            </fwb-accordion-header>
            <fwb-accordion-content>
              <div>
                <p class="mb-2 text-gray-500">
                    <ul>
                        <li>Introducera spelet och karaktären Mullvard till eleverna.</li><br>
                        <li>Berätta att de ska använda föremålen de samlat in under spelet som inspiration för att skriva berättelser.</li><br>
                        <li>Låt eleverna spela och samla historiska föremål.</li>
                    </ul>
                </p>
              </div>
            </fwb-accordion-content>
          </fwb-accordion-panel>
          <fwb-accordion-panel>
            <fwb-accordion-header class="bg-gray-300">
                Skapande av berättelser
            </fwb-accordion-header>
            <fwb-accordion-content>
              <div>
                  <p class="mb-2 text-gray-500">
                  <ul>
                      <li>Be eleverna välja ett eller flera föremål från sina ryggsäckar som de vill skriva en berättelse om.</li><br>
                    <li>Ge dem tid att planera sina berättelser. För inspiration - se "Skriv historia"</li>
                    
                </ul>
                  </p>
              </div>
            </fwb-accordion-content>
          </fwb-accordion-panel>
          <fwb-accordion-panel>
            <fwb-accordion-header class="bg-gray-300">
              Mål med uppgiften
            </fwb-accordion-header>
            <fwb-accordion-content>
              <div>
                <p class="mb-2 text-gray-500">
                <ul>
                    <li>Eleverna ska:</li><br>
                    <li>Använda de historiska föremålen i sin skattkista som inspiration för att skriva berättelser</li><br>
                    <li>Utveckla sina skrivfärdigheter genom att skapa tydliga och sammanhängande texter</li>
                </ul>
                </p>
            </div>
            </fwb-accordion-content>
          </fwb-accordion-panel>
          <fwb-accordion-panel>
            <fwb-accordion-header class="bg-gray-300">
              Kopplingar till LGR22
            </fwb-accordion-header>
            <fwb-accordion-content>
              <div>
                <p class="mb-2 text-gray-500">
                <p>Svenska, centralt innehåll<br>
                   Årskurs 1-3 samt 4-6</p>
                <ul>
                    <li>Skapande av texter där ord och bild samspelar (Skolverket, 2022, s.226-227)</li>
                </ul>
                </p>
            </div>

            </fwb-accordion-content>
          </fwb-accordion-panel>
         
        </fwb-accordion>
      </div>
  
      <div class="ml-5">
        <fwb-button
          color="default"
          size="lg"
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