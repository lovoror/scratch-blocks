/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2017 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /**
 * @fileoverview Tests for Blockly.FieldVariableGetter
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

function test_fieldvariablegetter_constructor() {
  var field = new Blockly.FieldVariableGetter('text', 'name');
  assertEquals(field.getValue(), 'text');
}

function test_fieldvariablegetter_isEditable() {
  var field = new Blockly.FieldVariableGetter('text', 'name');
  // EDITABLE is true by default, but without a source block a field can't be
  // edited.
  assertFalse('Field without a block is not editable',
      field.isCurrentlyEditable());
}

function test_fieldvariablegetter_isEditableBlock() {
  var field = new Blockly.FieldVariableGetter('text', 'name');

  var editableBlock = {
    isEditable: function() {
      return true;
    }
  };

  field.sourceBlock_ = editableBlock;

  // EDITABLE is true by default, but without a source block a field can't be
  // edited.
  assertTrue('Variable getter field on a block is editable',
      field.isCurrentlyEditable());
}
