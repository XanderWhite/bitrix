<div class="{{ $block->mod($mods ?? []) }}@if($class ?? false) {{ $class }}@endif">
    <select class='{!! $block->elem("select") !!}' name='{!! $name !!}'>
        <option value="">{!! $label !!}</option>
        <?php foreach ($items as $item): ?>
            <option value="<?= $item['NAME'] ?>" <?= ($value == $item['NAME'] ? 'selected' : '') ?>>
                <?= $item['NAME'] ?>
            </option>
        <?php endforeach; ?>
    </select>
  </div>