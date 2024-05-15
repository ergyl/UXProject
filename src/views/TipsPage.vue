<!-- Page in the SPA -->

<template>
  <div class="overflow-scroll">
    <div class="flex flex-col justify-start mt-10 ml-8 mr-8 border border-black bg-white">
      <h2 class="mt-4 ml-4 self-center">
        Skrivtips
      </h2>
      <p class="mt-4 ml-4">
        Här är lite tips för att komma igång med att skriva om föremålen.
      </p>
      <fwb-accordion
        class="m-4"
        :open-first-item="false"
      >
        <fwb-accordion-panel>
          <fwb-accordion-header class="bg-bla rounded-t-xl">
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
          <fwb-accordion-header class="bg-bla">
            Utforska sinnena
          </fwb-accordion-header>
          <fwb-accordion-content>
            <div>
              <p class="mb-2 text-gray-500">
                Välj ett sinne (syn, hörsel, smak, lukt, känsel).
                Beskriv hur det påverkar din berättelse.
              </p>
              <p class="text-gray-500">
                Vad <em>ser</em>, <em>hör</em>,
                <em>smakar</em>, <em>luktar</em> eller <em>känner</em> karaktärerna?
              </p>
            </div>
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel>
          <fwb-accordion-header class="bg-bla">
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
          <fwb-accordion-header class="bg-bla">
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
          <fwb-accordion-header class="bg-bla">
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
