<template>
  <div>
    <div class="calendar-helper">
      <img
        width="30"
        alt="calendar"
        src="../public/calendar.svg">
    </div>
    <div class="calendar-helper__tooltip">
      <div class="calendar-helper__options">
        <div
          class="calendar-helper__option"
          @click="createIcsFile">
          <div class="calendar-helper__icon-container">
            <img
              width="20"
              alt="save-calendar"
              src="../public/save.svg">
          </div>
          <span>
            .ics file
          </span>
        </div>
        <div
          class="calendar-helper__option"
          @click="createGoogleCalendarEvent">
          <div class="calendar-helper__icon-container">
            <img
              width="20"
              alt="google-calendar"
              src="../public/google-calendar.svg">
          </div>
          <span>
            Google Calendar
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { saveAs } from 'file-saver'
import * as ics from 'ics'

export default {
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  methods: {
    formatDateForGoogle(date) {
      return date.toISOString().replace(/(-|:|\.)/g, '')
    },
    createIcsFile() {
      const currentDate = new Date(Date.now())
      const eventStartDate = new Date(this.event.frontmatter.date)
      const eventEndDate = new Date(this.event.frontmatter.endDate || this.event.frontmatter.date)

      const fixHoursIfNecessary = (hours) => {
        if (hours === 24) {
          return 23
        }
        return hours
      }

      const fixMinutesIfNecessary = (hours, minutes) => {
        if (hours === 24) {
          return 59
        }
        return minutes
      }

      const startHours = fixHoursIfNecessary(+this.event.frontmatter.time.split(':')[0])
      const startMinutes = fixMinutesIfNecessary(+this.event.frontmatter.time.split(':')[0], +this.event.frontmatter.time.split(':')[1])
      const endHours = fixHoursIfNecessary(+this.event.frontmatter.endTime.split(':')[0])
      const endMinutes = fixMinutesIfNecessary(+this.event.frontmatter.endTime.split(':')[0], +this.event.frontmatter.endTime.split(':')[1])

      const address = this.event.frontmatter.address ? this.event.frontmatter.address : ''

      ics.createEvent( {
        created: [currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()],
        start: [eventStartDate.getFullYear(), eventStartDate.getMonth() + 1, eventStartDate.getDate(), startHours, startMinutes],
        end: [eventEndDate.getFullYear(), eventEndDate.getMonth() + 1, eventEndDate.getDate(), endHours, endMinutes],
        location: address,
        title: this.event.title,
        description: this.event.frontmatter.description,
      }, (error, createdEventString) => {
        if (error) {
          return
        }
        const createdEventStringAsBlob = new Blob([createdEventString], { type: 'text/plain;charset=utf-8' })
        saveAs(createdEventStringAsBlob, `${this.event.title}.ics`)
      })
    },
    createGoogleCalendarEvent() {
      const start = new Date(this.event.frontmatter.date)
      start.setHours(+this.event.frontmatter.time.split(':')[0])
      const end = new Date(this.event.frontmatter.endDate || this.event.frontmatter.date)
      end.setHours(+this.event.frontmatter.endTime.split(':')[0])
      
      
      

      const eventStart = this.formatDateForGoogle(new Date(start))
      const eventEnd = this.formatDateForGoogle(new Date(end))


      window.open(`https://calendar.google.com/calendar/u/0/r/eventedit?text=${this.event.title}+in+${this.event.frontmatter.venue}&dates=${eventStart}/${eventEnd}&location=${this.event.frontmatter.address ? this.event.frontmatter.address : ''}&details=${this.event.frontmatter.description}`)
    }
  }
}

</script>

<style scoped lang="stylus">
@require './../theme/styles/config.styl'
.calendar-helper {
  margin-left: 0.5rem;
  padding-right: 0.5rem;
  min-width 30px
  cursor pointer

  &__options {
    cursor: pointer;
    border: 1px solid $primaryAccentColor
    padding: 0.5rem
  }

  &__option {
    display: flex;
    padding-top: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  &__option:hover {
    background-color: $codeBgColor;
  }

  &__icon-container {
    margin-right: 0.5rem;
  }

  &__tooltip {
    display: none;
    position: absolute;
    margin-top: -1rem;
    background-color: #100e14;

    &:hover {
      display: block;
    }
  }
}

.calendar-helper:hover + .calendar-helper__tooltip {
  display: block;
} 
</style>
