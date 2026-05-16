import React from 'react';

import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DeleteConfirmModal = ({
  visible,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>
            Are you sure you want to delete this request?
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={onClose}>
              <Text style={styles.cancelText}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={onConfirm}>
              <Text style={styles.deleteText}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteConfirmModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 24,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cancelBtn: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },

  deleteBtn: {
    flex: 1,
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },

  cancelText: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 15,
  },

  deleteText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});