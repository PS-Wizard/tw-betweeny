<div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <nav
        class="bg-white shadow-md px-4 sm:px-6 md:px-10 py-3 flex justify-between items-center"
    >
        <div class="text-xl sm:text-2xl font-bold">Logo</div>
        <ul class="flex gap-4 sm:gap-6 text-sm sm:text-base font-medium">
            <li><a href="#" class="hover:text-blue-600">Home</a></li>
            <li><a href="#" class="hover:text-blue-600">About</a></li>
            <li><a href="#" class="hover:text-blue-600">Blog</a></li>
            <li><a href="#" class="hover:text-blue-600">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero -->
    <section
        class="bg-gradient-to-r from-blue-100 to-purple-100 p-[6~12] py-[12~32] text-center"
    >
        <h1 class="text-3xl text-[4xl~5xl] font-bold mb-4">
            Responsive Demo Page
        </h1>
        <p class="text-sm text-[base~lg] text-gray-700 max-w-xl mx-auto" >
            Showing off a bunch of Tailwind utilities using sm: / md: / lg:
            responsive stuff. Includes padding, margin, width, height, text size
            and more.
        </p>
    </section>

    <!-- Content blocks -->
    <main class="flex-grow">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div
                class="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 text-center w-full sm:max-w-sm mx-auto"
            >
                <h2 class="text-lg sm:text-xl mb-2 font-semibold">Box 1</h2>
                <p class="text-sm sm:text-base mb-4">
                    padding, margin, width demo
                </p>
                <div
                    class="bg-blue-200 p-4 sm:p-6 md:px-10 md:py-8 m-2 sm:mx-4 lg:my-6 rounded"
                >
                    Content Box
                </div>
            </div>

            <!-- Card 2 -->
            <div
                class="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 text-center w-full sm:max-w-sm mx-auto"
            >
                <h2 class="text-lg sm:text-xl mb-2 font-semibold">Box 2</h2>
                <p class="text-sm sm:text-base mb-4">
                    height / width / min-max
                </p>
                <div
                    class="bg-green-200 w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px]
                      min-w-[50px] max-w-[300px] min-h-[50px] max-h-[300px] mx-auto flex items-center justify-center rounded"
                >
                    Sizing
                </div>
            </div>

            <!-- Card 3 -->
            <div
                class="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 text-center w-full sm:max-w-sm mx-auto"
            >
                <h2 class="text-lg sm:text-xl mb-2 font-semibold">Box 3</h2>
                <p class="text-sm sm:text-base mb-4">
                    Text responsive + spacing
                </p>
                <div
                    class="text-xs sm:text-sm md:text-lg lg:text-xl px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-yellow-200 rounded mb-4"
                >
                    Responsive Text
                </div>
                <div
                    class="p-2 pt-4 pr-6 pb-2 pl-3 m-2 mt-3 mr-4 mb-1 ml-2 bg-yellow-100 rounded"
                >
                    Detailed Spacing
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer
        class="bg-white border-t mt-8 p-4 text-center text-sm text-gray-500"
    >
        <div class="mx-auto max-w-screen-sm px-4 py-2">
            &copy; 2025 Your Name. All rights reserved.
        </div>
    </footer>
</div>
