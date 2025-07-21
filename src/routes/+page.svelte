<div class="space-y-8">
    <div class="bg-blue-300 m-4">Normal margin m-4</div>

    <!-- Clamped margin -->
    <div class="bg-green-300 m-[10px~40px]">
        Clamped margin: margin clamp(10px, 25px, 40px)
    </div>

    <!-- Clamped horizontal margin -->
    <div class="bg-yellow-300 mx-[20px~80px]">
        Clamped margin-x: margin-left & margin-right clamp(20px, 50px, 80px)
    </div>

    <!-- Clamped padding -->
    <div class="bg-red-300 p-[5px~30px]">
        Clamped padding: clamp(5px, 17.5px, 30px)
    </div>

    <!-- Clamped width -->
    <div class="bg-purple-300 w-[100px~300px] h-20">
        Clamped width: clamp(100px, 200px, 300px)
    </div>

    <!-- Clamped font size -->
    <div class="text-[12px~24px] bg-gray-300">
        <p>Clamped font size clamp(12px, 18px, 24px)</p>
    </div>

    <div class="text-[sm~120px] bg-gray-300">
        <p>sm to lg</p>
    </div>

    <!-- Clamped gap -->
    <div class="flex gap-[4px~20px] bg-pink-200 p-4">
        <div class="bg-pink-500 w-[8px~64px] h-[8px~64px]"></div>
        <div class="bg-pink-600 w-[8px~64px] h-[8px~64px]"></div>
        <div class="bg-pink-700 w-[8px~64px] h-[8px~64px]"></div>
    </div>
</div>
<style>
</style>
