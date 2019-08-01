
# Style Import
you have to import manually the scss @braune-digital/layout/scss/bd-layout.bundle.scss in your project. 

## You have to style your modal by your self!

Basic Layout you have to use! Important, do not forget <bd-alert> outside of <bd-layout>


```
<bd-layout>
    <bd-layout-sidebar>
        <bd-sidebar>
            <bd-sidebar-pre></bd-sidebar-pre>
            <bd-sidebar-main>
                <bd-sidebar-list>
                    <bd-sidebar-list-item>
                    </bd-sidebar-list-item>
                </bd-sidebar-list>
            </bd-sidebar-main>
            <bd-sidebar-post>
            </bd-sidebar-post>
        </bd-sidebar>
    </bd-layout-sidebar>

    <bd-layout-content>
        <bd-header>
            <bd-header-main>
            </bd-header-main>
            <bd-header-aside>
            </bd-header-aside>
        </bd-header>
        <bd-content>
            <bd-content-main>
            </bd-content-main>
            <bd-content-aside>
            </bd-content-aside>
        </bd-content>
    </bd-layout-content>
</bd-layout>

<bd-alert></bd-alert>
```
