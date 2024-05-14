<!-- Page in the SPA -->

<template>
  <div class="flex flex-col justify-start mt-10 ml-8 mr-8 border border-black bg-white overflow-scroll">
    <h2 class="self-center mt-4">
      Om spelet
    </h2>
    <fwb-accordion
      class="m-4"
      :open-first-item="false"
    >
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-gray-300">
          Om spelet
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div class="mb-2 text-gray-500">
            <p class="mb-2">
              <strong>Totalt 24 848 föremål att upptäcka.</strong>
            </p>
            <p class="mb-2">
              Kliv in i historiens mysterier som Mullward, en modig liten mullvad som
              tar på sig sig uppdraget att återställa ett tomt museum med historiska skatter.
            </p>
            <p class="mb-2">
              Upptäck spännande föremål och skapa egna äventyr genom att låta historien inspirera din fantasi!
            </p>
            <p class="mb-2">
              När du gräver fram föremål så får du fram nio slumpmässiga föremål. Så här många föremål finns i varje kategori:
            </p>
            <ul class="list-disc mb-2">
              <li>Världen runt: 23 521 st</li>
              <li>Leksaker:  752 st</li>
              <li>Inramat: 575 st</li>
            </ul>
            <p>Möjligheterna är oändliga!</p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-gray-300">
          K-samsök
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div class="text-gray-500">
            <p class="mb-2">
              Bilder och information om föremålen är hämtade från K-samsök. 
            </p>
            <p class="mb-2">
              K-samsök tillgängliggör kulturarvsdata från svenska
              museer och andra minnesinstitutioner.
            </p>
            <p>
              I K-samsök finns mer än tio miljoner objekt som till exempel museiföremål,
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
</template>
    
    <script setup>
    import {
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel,
  } from 'flowbite-vue'
    </script>