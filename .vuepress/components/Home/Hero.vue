<template>
  <div v-if="config.layout === 1" class="hero-main">
    <div class="hero-main_headline-date">
      {{ subheading }}
    </div>
    <div class="hero-main_headline">
      {{ heading }}
    </div>
    <Button buttonText="See Events" to="/events/" />
  </div>

  <div v-else-if="config.layout === 0" class="hero-main">
    <div class="hero-main_headline">
      {{ heading }}
    </div>
    <div class="hero-main_headline-date">
      {{ dateSubheading }}
    </div>
    <div class="hero-main_headline-paragraph">
      {{ subheading }}
    </div>
    <Button
      class="hero-main_button"
      buttonText="Submit Event"
      :to="this.config.sumbitEventLink"
    />
  </div>
</template>

<script>
import config from "../../config";
import Button from "../Button.vue";

export default {
  components: { Button },
  data: () => ({
    heading: config.heading,
    subheading: config.subHeading,
    dateSubheading: config.dateSubheading,
    config: config,
  }),
};
</script>

<style lang="stylus">
@import '../../theme/styles/config.styl'

.hero-main
  color #fff
  display flex
  flex-direction column
  align-items center
  justify-content center
  width 100%

  &_headline-date
    font-size clamp(2rem, calc(-.875rem + 1.8vw),8.5rem)
    line-height 28px
    margin-bottom 1rem
    max-width 55rem
    text-align center

  &_headline-paragraph
    font-size clamp(1rem, calc(-.875rem + 1.8vw),8.5rem)
    line-height 28px
    margin-bottom 1rem
    max-width 55rem
    text-align center

  &_headline
    font-size clamp(3rem, calc(-0.875rem + 8.333vw), 10.5rem)
    text-align center
    max-width 85rem
    margin-bottom 2rem

  &_button
    padding-top 3rem
</style>
