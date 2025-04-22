<script lang="ts">
  import { clsx } from 'clsx';

  const mainMenus: { href: string; label: string }[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];
</script>

<header class="fixed inset-0 z-50 h-16 bg-slate-950/50 backdrop-blur-md">
  <div class="m-auto flex h-full w-[1450px] items-center justify-between">
    <span>x</span>
    <ul class="flex gap-6">
      {#each mainMenus as menu, i}
        <li>
          <a
            href={menu.href}
            class={clsx(
              'border-b-2 py-1',
              i === 2
                ? 'border-b-sky-600 bg-gradient-to-b from-purple-600 to-sky-600 bg-clip-text font-semibold text-transparent'
                : 'border-b-transparent font-medium'
            )}
            on:click|preventDefault>{menu.label}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</header>

<div class="grid gap-36 before:h-16">
  <!-- about -->
  <div class="m-auto grid w-full max-w-6xl gap-6">
    <div class="flex flex-col items-center justify-center gap-2">
      <h1 class="text-3xl font-semibold">About Me</h1>
      <div class="h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-sky-600"></div>
    </div>

    <div class="flex flex-col items-center">
      <h3 class="text-2xl font-semibold">My Qualities</h3>
    </div>

    <div class="grid auto-rows-min grid-cols-[5fr_7fr] gap-6">
      <div class="flex flex-col">
        <div class="flex flex-col gap-3 rounded-xl bg-slate-900 p-6">
          <h3
            class="bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-2xl font-semibold text-transparent"
          >
            Who I Am
          </h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iste praesentium ipsa
            animi, quod accusamus illo quaerat iusto est odio quis totam explicabo, atque, debitis
            laborum tempore quo. Distinctio ratione, culpa enim quia at aliquam libero doloremque
            quas assumenda delectus maxime non eius rerum! Sed doloribus excepturi eligendi
            similique libero aliquam, ullam sequi iure non corporis reprehenderit accusamus quo
            debitis inventore, asperiores fugiat laborum magni? Aperiam numquam deserunt autem, rem
            earum cum quam officiis exercitationem fuga enim aliquid, saepe quasi? Aut, iste,
            facilis cumque labore reiciendis culpa deleniti ea hic consequatur delectus distinctio
            eius autem qui unde consectetur dignissimos alias?
          </span>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <div class="grid grid-cols-2 gap-6">
          <div class="flex flex-col gap-3 rounded-xl bg-slate-900 p-6">
            <div
              class="flex size-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-sky-600"
            >
              <span class="icon-[lucide--chevrons-left-right] size-8"></span>
            </div>
            <h4 class="text-xl font-semibold">Problem Solver</h4>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat alias
              inventore similique tempora commodi repellat aut est corporis accusantium.
            </span>
          </div>
          <div class="flex flex-col gap-3 rounded-xl bg-slate-900 p-6">
            <div
              class="flex size-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-sky-600"
            >
              <span class="icon-[lucide--chevrons-left-right] size-8"></span>
            </div>
            <h4 class="text-xl font-semibold">Problem Solver</h4>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat alias
              inventore similique tempora commodi repellat aut est corporis accusantium.
            </span>
          </div>
          <div class="flex flex-col gap-3 rounded-xl bg-slate-900 p-6">
            <div
              class="flex size-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-sky-600"
            >
              <span class="icon-[lucide--chevrons-left-right] size-8"></span>
            </div>
            <h4 class="text-xl font-semibold">Problem Solver</h4>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat alias
              inventore similique tempora commodi repellat aut est corporis accusantium.
            </span>
          </div>
          <div class="flex flex-col gap-3 rounded-xl bg-slate-900 p-6">
            <div
              class="flex size-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-sky-600"
            >
              <span class="icon-[lucide--chevrons-left-right] size-8"></span>
            </div>
            <h4 class="text-xl font-semibold">Problem Solver</h4>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat alias
              inventore similique tempora commodi repellat aut est corporis accusantium.
            </span>
          </div>
        </div>

        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem beatae sint sunt!</span
        >
      </div>
    </div>
  </div>

  <!-- skills -->
  <div class="m-auto grid w-full max-w-6xl gap-6">
    <div class="flex flex-col items-center justify-center gap-2">
      <h1 class="text-3xl font-semibold">My Skills</h1>
      <div class="h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-sky-600"></div>
    </div>

    <div class="flex flex-col items-center">
      <h3 class="text-2xl font-semibold">My Stack</h3>
    </div>
  </div>
  <!-- experience -->
  <!-- projects -->
  <!-- education -->

  <!-- contact -->
  <div class="m-auto grid w-full max-w-6xl gap-12">
    <div class="flex flex-col items-center justify-center gap-2">
      <h1 class="text-3xl font-semibold">Get In Touch</h1>
      <div class="h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-sky-600"></div>
    </div>

    <div class="grid grid-cols-2">
      <div class="flex flex-col gap-6">
        <h3 class="text-2xl font-semibold">Contact Information</h3>
        <div class="flex items-center gap-3">
          <div
            class="flex size-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-sky-600"
          >
            <span class="icon-[lucide--chevrons-left-right] size-8"></span>
          </div>
          <div class="flex flex-col">
            <span>Email</span>
            <span>masyaqin37@gmail.com</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="flex size-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-sky-600"
          >
            <span class="icon-[lucide--chevrons-left-right] size-8"></span>
          </div>
          <div class="flex flex-col">
            <span>Email</span>
            <span>masyaqin37@gmail.com</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="flex size-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-sky-600"
          >
            <span class="icon-[lucide--chevrons-left-right] size-8"></span>
          </div>
          <div class="flex flex-col">
            <span>Email</span>
            <span>masyaqin37@gmail.com</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-col gap-6 rounded-xl bg-slate-900 p-6">
          <h3 class="text-2xl font-semibold">Send Me a Message</h3>
          <div class="flex flex-col gap-1.5">
            <label for="contact-name" class="font-medium">Name</label>
            <input type="text" id="contact-name" class="rounded-md border border-slate-700 p-3" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="contact-email" class="font-medium">email</label>
            <input type="text" id="contact-email" class="rounded-md border border-slate-700 p-3" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="contact-subject" class="font-medium">subject</label>
            <input
              type="text"
              id="contact-subject"
              class="rounded-md border border-slate-700 p-3"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="contact-message" class="font-medium">message</label>
            <textarea id="contact-message" class="rounded-md border border-slate-700 p-3" rows="5"
            ></textarea>
          </div>

          <button
            type="button"
            class="cursor-pointer rounded-md bg-gradient-to-r from-purple-600 to-sky-600 p-3 font-semibold"
            >Send Message</button
          >
        </div>
      </div>
    </div>

    <div class="flex p-6">&nbsp;</div>

    <div class="flex flex-col gap-6">
      <div class="grid grid-cols-[5fr_7fr] gap-6">
        <div class="flex flex-col gap-3">
          <h3
            class="bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-2xl font-semibold text-transparent"
          >
            Who I Am
          </h3>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus laboriosam
            cupiditate rerum quae ex, dicta ratione ipsum magni dolore repudiandae! Voluptatibus quo
            atque doloribus, sequi incidunt quibusdam blanditiis minus corporis!</span
          >
        </div>
        <div class="grid grid-cols-2">
          <div class="flex flex-col gap-3">
            <h5 class="text-lg font-semibold">Quick Links</h5>
            <ul class="flex flex-col gap-1.5">
              {#each mainMenus as menu}
                <li><a href={menu.href} on:click|preventDefault>{menu.label}</a></li>
              {/each}
            </ul>
          </div>

          <div class="flex flex-col gap-3">
            <h5 class="text-lg font-semibold">Contact</h5>
            <div class="flex flex-col gap-1.5">
              <span>Lorem, ipsum dolor.</span>
              <span>Lorem, ipsum dolor.</span>
              <span>Lorem, ipsum dolor.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full border-b border-b-slate-800"></div>
      <div class="mb-10 flex items-center justify-between text-sm text-slate-400">
        <span>© 2025 John Doe. All rights reserved.</span>
        <span>Designed & Built by John Doe</span>
      </div>
    </div>
  </div>
</div>
