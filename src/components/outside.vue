<template>
    <div class="SocialLinks NavBarSocialLinks social-links">
        <dj-external :href="'https://github.com/J-django'" :title="'github'" outside>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
                <path fill="currentColor" fill-rule="evenodd"
                    d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0"
                    clip-rule="evenodd" />
            </svg>
        </dj-external>
        <dj-external :href="'https://gitee.com/J-Django-Gitee'" :title="'gitee'" outside>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.59.59 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z" />
            </svg>
        </dj-external>
        <dj-external :href="'https://www.npmjs.com/package/django-ui'" :title="'npm'" outside>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="26.88" height="32" viewBox="0 0 430 512">
                <path fill="currentColor"
                    d="M71.609 112.569v286.649h143.432v-215.04h71.608v215.04h71.608V112.569zM430.08 40.96v430.08H0V40.96z" />
            </svg>
        </dj-external>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.NavBarSocialLinks {
    display: none;
}

.SocialLinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.social-links {
    margin-left: -8px;

    .social-links-list {
        margin: -4px -8px;
    }
}

.social-links {
    margin-left: -8px;

    .social-links-list {
        margin: -4px -8px;
    }
}

@media (min-width: 1280px) {
    .NavBarSocialLinks {
        display: flex;
        align-items: center;
    }
}
</style>