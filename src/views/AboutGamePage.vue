<!-- Page in the SPA -->

<template>
  <div class="flex flex-col justify-start my-10 mx-8 border border-black bg-white overflow-scroll lg:mt-10 lg:mx-96 lg:pt-8 lg:pb-12 lg:px-10">
    <h2 class="self-center mt-4">
      Om spelet
    </h2>
    <fwb-accordion
      class="m-4"
      :open-first-item="false"
    >
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-bla rounded-t-xl">
          Om spelet
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div class="mb-2 text-gray-500">
            <p class="mb-2">
              Kliv in i historiens mysterier som Mullward, en modig liten mullvad som
              tar på sig sig uppdraget att återställa ett tomt museum med historiska skatter.
            </p>
            <p class="mb-2">
              Upptäck spännande föremål och skapa egna äventyr genom att låta historien inspirera din fantasi!
            </p>
            <p class="mb-2">
              Föremålen slumpas fram och så här många finns i varje kategori:
            </p>
            <ul class="list-disc mb-2 ml-4">
              <li>Världen runt: 23 521 st</li>
              <li>Leksaker:  752 st</li>
              <li>Inramat: 575 st</li>
            </ul>
            <p class="mb-2">
              Totalt finns 24 848 föremål att upptäcka.
            </p>
            <p>Möjligheterna är <em>oändliga!</em></p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-bla">
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
        <fwb-accordion-header class="bg-bla">
          Vi som gjort spelet
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2 text-gray-500">
              Spelet är gjort som ett samarbetsprojekt på yrkeshögskolan Yrgo, Göteborg. Här är vi som gjort spelet (i alfabetisk ordning):
            </p>
            <p class="mb-2 text-gray-500">
              <strong>Java utvecklare:</strong> Erik Gylleus, Fredrik Sjöbäck, Ilia Grigore.<br>
            </p>
            <p class="mb-2 text-gray-500">
              <strong>UX-designers:</strong> Albin Larm, Emelie Berndtsson, Erik Vikingsson, Pascal Reicher, Åsa Eriksson
            </p>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header class="bg-bla">
          Version
        </fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <p class="mb-2 text-gray-500">
              Version 1.0
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