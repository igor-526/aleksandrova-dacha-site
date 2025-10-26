# UI Components Overview (Next.js + Tailwind + Storybook)

This document provides a summarized list of all UI elements for the “Aleksandrova Dacha” project — grouped by category, with purpose and key props.

---

## 🧱 Foundations

| Element | Purpose | Key Props |
|----------|----------|-----------|
| **ThemeTokens** | Global design variables (colors, fonts, radii, shadows). | `mode`, `brandColor`, `accentColor` |
| **Container** | Content width limiter. | `size`, `as`, `className`, `children` |

---

## ⚙️ UI Atoms

| Element | Purpose | Key Props |
|----------|----------|-----------|
| **Button** | Primary/secondary CTA. | `variant`, `color`, `size`, `iconLeft`, `iconRight`, `loading`, `fullWidth` |
| **Badge** | Status/label chip. | `tone`, `icon`, `onClose` |
| **Avatar** | Display people/animals. | `src`, `alt`, `size`, `shape` |
| **Icon** | Unified icon renderer. | `name`, `size`, `ariaHidden` |
| **Separator** | Visual divider. | `orientation`, `decorative` |
| **Tooltip** | Hover/focus hint. | `content`, `side`, `delay` |
| **Spinner / Skeleton** | Loading placeholder. | `size`, `width`, `height`, `radius` |

---

## 🧾 Form Controls

| Element | Purpose | Key Props |
|----------|----------|-----------|
| **Input** | Text field. | `label`, `value`, `onChange`, `type`, `error` |
| **Textarea** | Multi-line input. | `label`, `value`, `rows`, `maxLength` |
| **Select** | Option picker. | `options`, `value`, `onChange`, `placeholder` |
| **Checkbox / Radio / Switch** | Binary choices. | `label`, `checked`, `onChange`, `disabled` |
| **DatePicker** | Date selection. | `value`, `onChange`, `minDate`, `maxDate` |
| **TimePicker** | Time slot picker. | `value`, `onChange`, `interval`, `disabledTimes` |
| **FileUpload** | Image uploader. | `accept`, `multiple`, `maxSizeMB`, `onFiles` |
| **BookingForm** | Main booking form. | `serviceType`, `onSubmit`, `policyLink` |

---

## 🧭 Navigation

| Element | Purpose | Key Props |
|----------|----------|-----------|
| **Header** | Top nav + CTA. | `links`, `phone`, `cta`, `sticky`, `transparent` |
| **MobileMenu** | Drawer menu. | `open`, `onOpenChange`, `links` |
| **Breadcrumbs** | SEO page path. | `items` |
| **Tabs** | Category switch. | `items`, `value`, `onValueChange` |
| **Pagination** | Blog/page navigation. | `page`, `total`, `onPageChange` |
| **Footer** | Contacts + socials. | `address`, `phones`, `socials`, `menus` |

---

## 🪟 Overlays

| Element | Purpose | Key Props |
|----------|----------|-----------|
| **Modal** | Dialog box. | `open`, `onOpenChange`, `title`, `size` |
| **Lightbox** | Fullscreen gallery. | `images`, `startIndex`, `onClose` |
| **Toast** | Notification popup. | `title`, `description`, `tone`, `duration` |

---

## 📇 Data Display

| Element | Purpose | Key Props |
|----------|----------|-----------|
| **Card** | Base card layout. | `title`, `content`, `media`, `variant` |
| **PriceCard** | Offer with price + CTA. | `title`, `price`, `features`, `ctaLabel`, `ctaHref` |
| **PersonCard** | Trainer profile. | `name`, `role`, `photo`, `bioShort` |
| **HorseCard / AnimalCard** | Horse/animal info. | `name`, `photo`, `tags`, `cta` |
| **ReviewCard** | Customer review. | `author`, `rating`, `text`, `source` |
| **FAQItem** | Question-answer. | `question`, `answer`, `defaultOpen` |
| **GalleryGrid** | Photo grid. | `items`, `columns`, `onItemClick` |
| **Carousel** | Slider for images/reviews. | `items`, `renderItem`, `autoPlay`, `interval` |
| **Table / DataList** | Tabular data. | `columns`, `rows`, `onSort`, `responsive` |

---

## 🎞️ Media

| Element | Purpose | Key Props |
|----------|----------|-----------|
| **Image** | Optimized picture. | `src`, `alt`, `ratio`, `fill` |
| **Video** | Background/promo video. | `src`, `poster`, `autoPlay`, `loop`, `muted` |
| **MapEmbed** | Map with marker. | `provider`, `lat`, `lng`, `zoom`, `markerLabel` |

---

## 🧩 Page Sections

| Element | Purpose | Key Props |
|----------|----------|-----------|
| **Hero** | Visual intro with CTA. | `title`, `subtitle`, `ctaLabel`, `ctaHref`, `media` |
| **QuickServices** | Links to main services. | `items` |
| **Highlights** | Advantages block. | `features` |
| **PopularOffers** | Top packages. | `offers` |
| **Testimonials** | Reviews carousel/grid. | `items`, `asCarousel` |
| **AboutTeaser / Mission / TeamGrid / HorsesShowcase / ContactFarm / GallerySection** | About page blocks. | Cards collections |
| **ProgramsIntro / ProgramCards / PricingTable / CoachCarousel / SafetyNotice / BookingSection** | Lessons pages. | Mixed props |
| **RoutesHero / RouteTypes / RoutesMap / PhotoGallery / WeatherNotice** | Riding page blocks. | Offers/maps |
| **PhotoHero / PortfolioGrid / PreparationTips / Packages** | Photoshoots pages. | Portfolio, pricing |
| **Boarding / BreedingSale / VisitStableCTA** | Horse services. | Catalogs, CTAs |
| **BlogList / Article / RelatedPosts** | Blog content. | Posts, prose |

---
