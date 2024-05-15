<template>
  <div
    class="w-full rounded-full"
    :class="[heightClass, fadedBackgroundColor]"
  >
    <div
      class="rounded-full"
      :class="[progressBarColor, heightClass]"
      :style="{ width: progress + '%' }"
    />
  </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: String,
            default: '100'
        },
        colorChange: {
            type: Boolean,
            default: true
        },
        height: {
            type: String,
            required: true
        }
    },
    computed: {
        progressBarColor() {
            return this.colorChange ? this.getProgressColor(this.progress, false) : 'bg-morkgron';
        },
        fadedBackgroundColor() {
            return this.getProgressColor(this.progress, true);
        },
        heightClass() {
            return `h-${this.height}`;
        }
    },
methods: {
        getProgressColor(progress, faded) {
            const numericProgress = parseInt(progress);
            let colorClass;
            if (numericProgress > 50) {
                colorClass = 'bg-morkgron';
            } else if (numericProgress > 20) {
                colorClass = 'bg-gul';
            } else {
                colorClass = 'bg-rod';
            }
            if (faded) {
                return `${colorClass} bg-opacity-45`;
            }
            return colorClass;
        }
    }
};
</script>