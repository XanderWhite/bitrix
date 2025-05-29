<div class="<?php echo e($block->mod($mods ?? [])); ?><?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>">
    <select class='<?php echo $block->elem("select"); ?>' name='<?php echo $name; ?>'>
        <option value=""><?php echo $label; ?></option>
        <?php foreach ($items as $item): ?>
            <option value="<?= $item['NAME'] ?>" <?= ($value == $item['NAME'] ? 'selected' : '') ?>>
                <?= $item['NAME'] ?>
            </option>
        <?php endforeach; ?>
    </select>
  </div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/forms/forms-select/forms-select.blade.php ENDPATH**/ ?>