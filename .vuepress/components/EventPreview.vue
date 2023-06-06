<template>
  <div class="event-preview">
    <!-- Date and time -->
    <div class="event-preview_left-column">
      <div class="event-preview_date">
        <div class="event-preview_date-add-to-calendar-and-event-time">
          <DateTime :date="event.frontmatter.date" :endDate="event.frontmatter.endDate" :time="event.frontmatter.time"
            :endTime="event.frontmatter.endTime"/>
          <CalendarHelper :event="event" class="event-preview_calendar-helper"/>
        </div>
        <div class="event-preview_badge-and-link-to-website">
          <div>
            <Badge slot="after" :text="event.frontmatter.category" />
    
            <Badge v-if="event.frontmatter.featured" slot="after" :text="'TOP'" />
          </div>
          <div class="event-preview_button-attend-event-container">
            <Button buttonText="Attend event" :to="event.frontmatter.tickets" className="event-preview_button-attend-event"/>
          </div>
        </div>
      </div>

      
      <div class="event-preview_toggle-description-visibility--mobile">
        <img v-if="isMaximazed === false" height="35" width="35" src="./../public/plus.svg" alt="open" @click="isMaximazed = true"/>
        <img v-else  src="./../public/minus.svg" height="35"  width="35" alt="close" @click="isMaximazed = false"/>
      </div>

    </div>

    <div class="event-preview_right-column">
      <div class="event-preview_content">
        <!-- Event's name -->
        <h2 class="event-preview_name">
          <a class="event-preview_name-link" :href="$withBase(event.path)">{{ event.frontmatter.name }}</a>
        </h2>
        
        <!-- Event's description -->
        <p class="event-preview_description" v-if="isMaximazed" >{{ event.frontmatter.description }}</p>
      </div>
      
      <div class="event-preview_toggle-description-visibility--desktop">
        
        <img v-if="isMaximazed === false" height="35" width="35" src="./../public/plus.svg" alt="open" @click="isMaximazed = true"/>
        <img v-else  src="./../public/minus.svg" height="35"  width="35" alt="close" @click="isMaximazed = false"/>
      </div>
    </div>

    
  </div>
</template>

<script lang="ts">
import CalendarHelper from "./CalendarHelper.vue";
import DateTime from "./Event/DateTime.vue";
import Badge from '../theme/Badge.vue'
import Button from "./Button.vue";

export default {
  components: { DateTime, CalendarHelper, Badge },
  name: "EventPreview",
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isMaximazed: false,
    };
  },
};
</script>

<style scoped lang="stylus">
@require './../theme/styles/config.styl'

.event-preview
  display flex
  flex-direction: column
  justify-content space-between
  border-bottom: 1px solid rgba(249, 250, 251, 0.2);
  padding-bottom 2rem

  &_date
    width 100%

  &_content
    width clamp(270px, 480px, 500px)

  &_toggle-description-visibility--desktop,
  &_toggle-description-visibility--mobile
    cursor pointer
    margin 0.7rem 0 0 1rem
  
  &_toggle-description-visibility--desktop
    display none

  &_name
    text-transform uppercase
    font-size clamp(32px, calc(-0.875rem + 6.333vw), 38px)
    font-weight 600
    font-family $primaryFontFamily
    line-height 50px
    margin: 2.5rem 0 1rem
    padding 0
    border: none
  
  &_name-link
    border: none

  &_right-column
    display flex

  &_description
    margin-top 0

  &_left-column
    display flex
    justify-content space-between

  &_badge-and-link-to-website
    display grid
    grid-template-columns max-content max-content
    grid-gap 0.7rem

  &_button-attend-event-container
    align-self: center;

@media(min-width: 1100px)
  .event-preview
    flex-direction: row

    &_toggle-description-visibility--desktop
      display block

    &_toggle-description-visibility--mobile
      display none

    &_name
      margin: 0.7rem 0 1.5rem 0
.event-preview_date-add-to-calendar-and-event-time
  display flex
  flex-wrap: wrap;
  gap 0.5rem

.event-preview_calendar-helper
  margin-top 1.5rem
</style>

<style lang="stylus">
.event-preview_button-attend-event
  height 18px 
  font-size 0.9rem     
  color black
  line-height 18px
  padding 0.3em 0.6em 
  border-radius 3px
  border 1px solid #01ffe0
  background: #0fffe5;
  text-decoration: none !important;

  &:hover 
    text-decoration: none;

</style>