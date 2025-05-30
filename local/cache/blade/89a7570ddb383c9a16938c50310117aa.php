<form class='<?php echo $block->mod($mods ?? []); ?>'  action="<?php echo $action; ?>" method="<?php echo $method; ?>" name="myform" id="myform">
    <?php echo $bitrixSessidPost; ?>


    <div class='<?php echo $block->elem("wrapper"); ?>'>
        <?php $__currentLoopData = $fields; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $field): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php echo $field; ?>

        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</form>
<?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/forms/forms-form/forms-form.blade.php ENDPATH**/ ?>