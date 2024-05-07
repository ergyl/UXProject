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
              Om spelet
            </fwb-accordion-header>
            <fwb-accordion-content>
              <div>
                <p class="mb-2 text-gray-500">
                    Kliv in i historiens mysterier som Mullward, en modig liten mullvad som
                    tar på sig sig uppdraget att återställa ett tomt museum med historiska skatter.
                    Upptäck spännande föremål och skapa egna äventyr genom att låta historien inspirera din fantasi!
                </p>
              </div>
            </fwb-accordion-content>
          </fwb-accordion-panel>
          <fwb-accordion-panel>
            <fwb-accordion-header class="bg-gray-300">
              K-samsök
            </fwb-accordion-header>
            <fwb-accordion-content>
              <div>
                <p class="mb-2 text-gray-500">
                    Bilder och information om föremålen är hämtade från K-samsök. K-samsök tillgängliggör kulturarvsdata från svenska
                    museer och andra minnesinstitutioner. I K-samsök finns mer än tio miljoner objekt som till exempel museiföremål,
                    lämningar, bildsamlingar och arkivhandlingar.
                </p>
              </div>
            </fwb-accordion-content>
          </fwb-accordion-panel>
          <fwb-accordion-panel>
            <fwb-accordion-header class="bg-gray-300">
              Vi som gjort spelet
            </fwb-accordion-header>
            <fwb-accordion-content>
              <div>
                <p class="mb-2 text-gray-500">
                  Java utvecklare: Proffessor Ilja, Erik och Fredrik.<br>
                  UX-designers: Albin, Åsa, Emelie, Pascal och Erki.
                </p>
              </div>
            </fwb-accordion-content>
          </fwb-accordion-panel>
          <fwb-accordion-panel>
            <fwb-accordion-header class="bg-gray-300">
              Version
            </fwb-accordion-header>
            <fwb-accordion-content>
              <div>
                <p class="mb-2 text-gray-500">
                  Version 1.0!!!
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